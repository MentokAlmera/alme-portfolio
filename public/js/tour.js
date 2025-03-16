document.addEventListener("DOMContentLoaded", function () {
  if (typeof Shepherd === "undefined") {
    console.error("Shepherd.js is not loaded.");
    return;
  }

  const tour = new Shepherd.Tour({
    useModalOverlay: true,
    defaultStepOptions: {
      classes: "shadow-md bg-purple-dark",
      scrollTo: true,
    },
  });

  tour.addStep({
    title: "Navbar",
    text: "This is the navigation bar, where you can access different sections of the site",
    attachTo: {
      element: "#panel1",
      on: "bottom",
    },
    buttons: [
      {
        text: "Next",
        action: tour.next,
      },
      {
        text: "Finish",
        action: tour.complete,
      },
    ],
  });

  tour.addStep({
    title: "Home",
    text: "This is for home section",
    attachTo: {
      element: "#panel-1",
      on: "bottom",
    },
    buttons: [
      {
        text: "Back",
        action: tour.back,
      },
      {
        text: "Next",
        action: tour.next,
      },
      {
        text: "Finish",
        action: tour.complete,
      },
    ],
  });

  tour.addStep({
    title: "Interests and Hobbies",
    text: "Click to see my inetrests and hobbies",
    attachTo: {
      element: "#panel-2",
      on: "bottom",
    },
    buttons: [
      {
        text: "Back",
        action: tour.back,
      },
      {
        text: "Next",
        action: tour.next,
      },
      {
        text: "Finish",
        action: tour.complete,
      },
    ],
  });

  tour.addStep({
    title: "Project",
    text: "This section contains my project",
    attachTo: {
      element: "#panel-3",
      on: "bottom",
    },
    buttons: [
      {
        text: "Back",
        action: tour.back,
      },
      {
        text: "Next",
        action: tour.next,
      },
      {
        text: "Finish",
        action: tour.complete,
      },
    ],
  });

  tour.addStep({
    title: "Goals",
    text: "Click here to view my goals",
    attachTo: {
      element: "#panel-4",
      on: "bottom",
    },
    buttons: [
      {
        text: "Back",
        action: tour.back,
      },
      {
        text: "Next",
        action: tour.next,
      },
      {
        text: "Finish",
        action: tour.complete,
      },
    ],
  });

  tour.addStep({
    title: "Internship",
    text: "Click to see my internship details and documents.",
    attachTo: {
      element: "#panel-5",
      on: "top",
    },
    buttons: [
      {
        text: "Back",
        action: tour.back,
      },
      {
        text: "Next",
        action: tour.next,
      },
      {
        text: "Finish",
        action: tour.complete,
      },
    ],
  });

  tour.addStep({
    title: "Profile Section",
    text: "Here is my profile, including my picture, name, and bio.",
    attachTo: {
      element: "#step-profile",
      on: "bottom",
    },
    buttons: [
      {
        text: "Back",
        action: tour.back,
      },
      {
        text: "Next",
        action: tour.next,
      },
      {
        text: "Finish",
        action: tour.complete,
      },
    ],
  });

  tour.addStep({
    title: "Comments",
    text: "Click to see and add comments about me.",
    attachTo: {
      element: "#step-comments",
      on: "bottom",
    },
    buttons: [
      {
        text: "Back",
        action: tour.back,
      },
      {
        text: "Next",
        action: tour.next,
      },
      {
        text: "Finish",
        action: tour.complete,
      },
    ],
  });

  tour.addStep({
    title: "Restart Tour",
    text: "Click this button anytime to restart the tour.",
    attachTo: {
      element: "#startTourBtn",
      on: "top",
    },
    buttons: [
      {
        text: "Back",
        action: tour.back,
      },
      {
        text: "Finish",
        action: tour.complete,
      },
    ],
  });

  document
    .getElementById("startTourBtn")
    .addEventListener("click", function () {
      tour.start();
    });
});
