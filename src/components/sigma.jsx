import React from "react";
import Graph from "graphology";
import {
  SigmaContainer,
  useLoadGraph,
  useRegisterEvents,
  useSigma,
} from "@react-sigma/core";
import "@react-sigma/core/lib/react-sigma.min.css";

const LoadGraph = () => {
  const loadGraph = useLoadGraph();

  React.useEffect(() => {
    const graph = new Graph();
    graph.addNode("first", {
      x: 4,
      y: 9,
      size: 12,
      label: "My first node",
      color: "#FA4F40",
    });
    graph.addNode("second", {
      x: 10,
      y: 12,
      size: 12,
      label: "My Second node",
      color: "#FA4F40",
    });
    loadGraph(graph);
  }, [loadGraph]);

  return null;
};

const GraphEvents = () => {
  const registerEvents = useRegisterEvents();
  const sigma = useSigma();
  const [draggedNode, setDraggedNode] = React.useState(null);

  React.useEffect(() => {
    // Register the events
    registerEvents({
      downNode: (e) => {
        setDraggedNode(e.node);
        sigma.getGraph().setNodeAttribute(e.node, "highlighted", true);
      },
      mouseup: (e) => {
        if (draggedNode) {
          setDraggedNode(null);
          sigma.getGraph().removeNodeAttribute(draggedNode, "highlighted");
        }
      },
      mousedown: (e) => {
        // Disable the autoscale at the first down interaction
        if (!sigma.getCustomBBox()) sigma.setCustomBBox(sigma.getBBox());
      },
      mousemove: (e) => {
        if (draggedNode) {
          // Get new position of node
          const pos = sigma.viewportToGraph(e);
          sigma.getGraph().setNodeAttribute(draggedNode, "x", pos.x);
          sigma.getGraph().setNodeAttribute(draggedNode, "y", pos.y);

          // Prevent sigma to move camera:
          e.preventSigmaDefault();
          e.original.preventDefault();
          e.original.stopPropagation();
        }
      },
      touchup: (e) => {
        if (draggedNode) {
          setDraggedNode(null);
          sigma.getGraph().removeNodeAttribute(draggedNode, "highlighted");
        }
      },
      touchdown: (e) => {
        // Disable the autoscale at the first down interaction
        if (!sigma.getCustomBBox()) sigma.setCustomBBox(sigma.getBBox());
      },
      touchmove: (e) => {
        if (draggedNode) {
          // Get new position of node
          const pos = sigma.viewportToGraph(e);
          sigma.getGraph().setNodeAttribute(draggedNode, "x", pos.x);
          sigma.getGraph().setNodeAttribute(draggedNode, "y", pos.y);

          // Prevent sigma to move camera:
          e.preventSigmaDefault();
          e.original.preventDefault();
          e.original.stopPropagation();
        }
      },
      clickNode: (event) =>
        console.log(
          "clickNode",
          event.event,
          event.node,
          event.preventSigmaDefault
        ),
      doubleClickNode: (event) =>
        console.log(
          "doubleClickNode",
          event.event,
          event.node,
          event.preventSigmaDefault
        ),
      rightClickNode: (event) =>
        console.log(
          "rightClickNode",
          event.event,
          event.node,
          event.preventSigmaDefault
        ),
      wheelNode: (event) =>
        console.log(
          "wheelNode",
          event.event,
          event.node,
          event.preventSigmaDefault
        ),
      enterNode: (event) => console.log("enterNode", event.node),
      leaveNode: (event) => console.log("leaveNode", event.node),
    });
  }, [registerEvents, sigma, draggedNode]);

  return null;
};

export const DisplayGraph = () => {
  return (
    <>
      <SigmaContainer style={{ height: "500px", width: "500px" }}>
        <LoadGraph />
        <GraphEvents />
      </SigmaContainer>
    </>
  );
};
