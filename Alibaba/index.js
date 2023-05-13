// $(document).ready(function(){
//     $('#testBtn').on('click', function(){
//         alert('hey')
//     })

//     // Instance the tour
//     var tour = new Tour({
//         steps: [
//             {
//                 element: "#bootstrapTour1",
//                 title: "Title of my step 1",
//                 content: "Content of my step 1"
//             },
//             {
//                 element: "#bootstrapTour2",
//                 title: "Title of my step 2",
//                 content: "Content of my step 2"
//             }
//         ],
//         name: "tour",
//     });
//     console.log(tour)
//     // Initialize the tour
//     tour.init();
    
//     // Start the tour
//     tour.start();
    
// })
var tour = new Tour({
    name: "tour",
    steps: [
    {
      element: "#hi",
      title: "Title of my stepbjhbhjbhm",
      content: "Content of my step buhjnkjnkuhj"
    },
    {
      element: "#hi2",
      title: "Title of my step",
      content: "Content of my step"
    }],
    container: "body",
    smartPlacement: true,
    keyboard: true,
    storage: false,
    debug: false,
    backdrop: false,
    backdropContainer: 'body',
    backdropPadding: 0,
    redirect: true,
    orphan: false,
    duration: false,
    delay: false,
    basePath: "",
    template: "<div class='popover tour'><div class='arrow'></div> <h3 class='popover-title'></h3> <div class='popover-content'></div> <div class='popover-navigation'> <button class='btn btn-default' data-role='prev'>« Prev</button> <span data-role='separator'>|</span> <button class='btn btn-default' data-role='next'>Next »</button></div><button class='btn btn-default' data-role='end'>End tour</button></div>"
  });
    
  // Initialize the tour
  tour.init();
  
  $( document ).ready(function() {	 
      // Start the tour
      tour.start();
  });