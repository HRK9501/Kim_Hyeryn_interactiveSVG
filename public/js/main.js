(() => {
      //set up some waypoints and make things happen
      let seeMoreButtons = document.querySelectorAll('.see-more'),
          popOver = document.querySelector('.popover');

    //set up some waypoints and make things happen
    var waypoint = new Waypoint({
        element: document.querySelector('#spotify'),
        handler: function(direction) {
          console.log('This is about Spotify!');

          let svg = this.element.firstElementChild.contentDocument;
        }
    });

    var waypoint2 = new Waypoint({
        element: document.querySelector('#tidal'),
        handler: function(direction) {
          console.log('This is about Tidal!');
          // this.element.innerHTML += "<p>I got added with Waypoint!</p>";
        },

        // offset:300
    });

    var waypoint3 = new Waypoint({
      element: document.querySelector('#soundcloud'),
      handler: function(direction) {
        console.log('This is about Sound Cloud!');

        let svg = this.element.firstElementChild.contentDocument;
      }
    });

    var waypoint4 = new Waypoint({
      element: document.querySelector('#iheart'),
      handler: function(direction) {
        console.log('This is about iHeart Radio!');

        let svg = this.element.firstElementChild.contentDocument;
      }
    });

    var waypoint5 = new Waypoint({
      element: document.querySelector('#apple'),
      handler: function(direction) {
        console.log('This is about Apple Music!');

        let svg = this.element.firstElementChild.contentDocument;
      }
    });


    //show the popover
    function showPopover(appdata, el) {
        popOver.querySelector(".Content").textContent = `Content: ${appdata.Content}`;
        popOver.querySelector(".Users").textContent = `Users: ${appdata.Users}`;
        popOver.querySelector(".LaunchDate").textContent = `Launch Date: ${appdata.LaunchDate}`;
        popOver.querySelector(".Headquarter").textContent = `Headquarter: ${appdata.Headquarter}`;

        popOver.classList.add('show-popover');

        el.appendChild(popOver);
    }

    //do out fetch call to the database
    function fetchData() {
        let url = `/info/${this.dataset.target}`,
            targetElement = this;

        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            showPopover(data, targetElement);
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    seeMoreButtons.forEach(button => button.addEventListener("click", fetchData));
})();