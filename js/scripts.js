$(function(){
  //$("#input-date").val(Date().toISOString());
  $("#form-movie").submit(function(event){
    event.preventDefault();

    var inputMovie = $("#input-movie").val();
    var inputType = parseInt($("#input-type").val());
    var inputDate = $("#input-date").val();
    var inputTime = $("#input-time").val();
    var inputAge = parseInt($("#input-age").val());

    var newMovie = new Movie(inputMovie,inputType,inputDate,inputTime,inputAge);

    // if(inputName != "")
    // {
    //   $("ul#tasks").append(
    //     "<li><span class='task'>" + newTask.taskName + "</span></li>");
    // }
    //
    // $(".task").last().click(function(){
    //   currentTask = this;
    //   $("#show-task").show();
    //   $("#show-task h2").text(newTask.taskName);
    //   newTask.output(".output-task",".output-description");
    // });
    newMovie.calculatePrice();
    newMovie.output();

  });

});

  /*
  Code for remove button. When remove button is clicked remove Task stored in currentTask and then find the empty list and remove it from ul#tasks. Then hide the task description area and clear the output
  */
  // $("#task-remove").click(function()
  // {
  //   $(currentTask).remove();
  //   $("ul#tasks").find('li').each(function()
  //   {
  //     if($(this).is(':empty'))
  //     $(this).remove();
  //   });
  //   $("#show-task").hide();
  // });
  // });

  //Create a constructor for object Task
  function Movie(inputMovie, inputType, inputDate, inputTime, inputAge){
  this.movie = inputMovie;
  this.type = inputType;
  this.movieDate = inputDate;
  this.time = inputTime;
  this.age = inputAge;
  this.price = 10;
  }

  Movie.prototype.calculatePrice = function()
  {
    var temp = this.price;
    if(this.type)
    {
      temp += 5;
    }
    if(this.age >= 55)
    {
      temp -= 3;
    }
    if(parseInt(this.time)<=10)
    {
      temp -=3 ;
    }

    this.price = temp;
  };

  Movie.prototype.output = function ()
  {
    if(this.type)
    {
      $(".output-type").text("3D RMYX");
    }
    else {
      $(".output-type").text("2D");
    }

  $(".output-movie").text(this.movie.toString());
  $(".output-time").text(this.time);
  $(".output-date").text(this.movieDate);
  $(".output-price").text(formatUSD(this.price));
  };

  function clear(temp)
  {
  $(temp).val("");
  }

  function formatUSD(tempString)
  {
    return tempString.toLocaleString('en-US',{style: 'currency', currency: 'USD'});
  }
