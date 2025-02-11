
// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHeart(); // Display the cat-heart.gif
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the cat.gif initially
function displayCat() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    var catImage = new Image();
    // Set the source (file path) for the cat image
    catImage.src = 'cat.gif'; // Assuming the cat image is named "cat.gif"
    // Set alternative text for the image (for accessibility)
    catImage.alt = 'Cat';
    // When the cat image is fully loaded, add it to the image container
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the cat-heart.gif and a thankful message with a video background
function displayCatHeart() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';

    // Add the background video
    var video = document.createElement('video');
    video.src = '0211.mov'; // Path to your video file
    video.autoplay = true;
    video.loop = true;
    video.style.width = '50%'; // Make the video take up half the screen width
    video.style.height = '100%'; // Make sure the video takes up the full height of the screen
    video.style.objectFit = 'cover'; // Ensures video covers the area without distortion
    video.style.zIndex = '-1'; // Ensure the video stays behind the content

    // Create a container for the content
    var contentContainer = document.createElement('div');
    contentContainer.style.display = 'flex';
    contentContainer.style.width = '100%';
    contentContainer.style.height = '100vh'; // Full viewport height
    contentContainer.style.alignItems = 'center'; // Center content vertically
    contentContainer.style.justifyContent = 'center'; // Center content horizontally

    // Create a container for the message and image (emoji and cat-heart)
    var messageContainer = document.createElement('div');
    messageContainer.style.flex = '1'; // Takes up the other half of the space
    messageContainer.style.textAlign = 'center'; // Center the content
    messageContainer.style.padding = '20px'; // Add some padding for the content

    // Create a new Image element for the cat-heart
    var catHeartImage = new Image();
    // Set the source (file path) for the cat-heart image
    catHeartImage.src = 'cat-heart.gif'; // Assuming the cat-heart image is named "cat-heart.gif"
    // Set alternative text for the image (for accessibility)
    catHeartImage.alt = 'Cat Heart';
    catHeartImage.style.width = '150px'; // You can adjust the size as needed
    catHeartImage.style.marginBottom = '20px'; // Space between image and message

    // Create a new element to hold the message
    var message = document.createElement('p');
    message.innerText = 'Thank you for being my Valentine for the last five years Pra! I feel happy. I love you 💖';

    // Add some styling for the message (optional)
    message.style.fontSize = '24px';
    message.style.fontWeight = 'bold';
    message.style.color = '#ff69b4'; // Pink color for the message

    // Append the message and image to the message container
    messageContainer.appendChild(catHeartImage);
    messageContainer.appendChild(message);

    // Append the video and message container to the content container
    contentContainer.appendChild(video);
    contentContainer.appendChild(messageContainer);

    // Add the content container to the body
    document.body.appendChild(contentContainer);

    // Hide the options container (optional)
    document.getElementById('options').style.display = 'none';
}


// Display the cat.gif initially
displayCat();
