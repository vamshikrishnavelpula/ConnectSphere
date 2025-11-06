
let currentProgress = 1;
    const totalProgress = 3;
    const progressBar = document.getElementById('progress-bar');

    function updateProgress() {
      currentProgress++;
      if (currentProgress > totalProgress) currentProgress = totalProgress;
      const percentage = (currentProgress / totalProgress) * 100;
      progressBar.style.width = `${percentage}%`;
      progressBar.textContent = `${currentProgress}/${totalProgress} complete`;
    }

    // Simulate progress updates (for demo purposes)
    setInterval(updateProgress, 3000);

    // canvas moving particles
   // Select the particle container
// Select the particle container
const particlesContainer = document.querySelector('.particles-container');

// Function to generate a random color
function getRandomColor() {
  const colors = [
    'rgba(255, 99, 71, 0.5)',  // Light Red
    'rgba(148, 222, 247, 0.5)', // Light Blue
    'rgba(164, 234, 164, 0.5)', // Light Green
    'rgba(247, 180, 190, 0.5)', // Light Pink
    'rgba(243, 234, 154, 0.5)'  // Light Yellow
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Generate 50 random particles
for (let i = 0; i < 50; i++) {
  const particle = document.createElement('div');
  particle.className = 'particle';
  particle.style.top = `${Math.random() * 100}vh`;
  particle.style.left = `${Math.random() * 100}vw`;
  particle.style.backgroundColor = getRandomColor(); // Assign random color
  particle.style.animationDelay = `${Math.random() * 5}s`; // Staggered start
  particlesContainer.appendChild(particle);
}

// feed
  // JavaScript for switching between sections


  // // js for chat in grps
  // function openChat(groupId) {
  //   // Hide all chat windows
  //   const allChats = document.querySelectorAll('.chat-window');
  //   allChats.forEach(chat => chat.style.display = 'none');
    
  //   // Show the selected group chat
  //   const selectedChat = document.getElementById(groupId);
  //   if (selectedChat) {
  //     selectedChat.style.display = 'flex';
  //   }
  // }
  
  