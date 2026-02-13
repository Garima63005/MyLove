// Unlock screen
function unlock() {
  const code = document.getElementById("code").value;
  const error = document.getElementById("error");
  const bgm = document.getElementById("bgm");

  if (code === "14072025") {
    document.getElementById("lockScreen").classList.add("hidden");
    document.getElementById("giftScreen").classList.remove("hidden");
    if (bgm) {
      bgm.play().catch(() => {});
    }
  } else {
    error.innerText = "❌ Wrong date! Try again.";
  }
}

// Show story section
function showStory() {
  document.getElementById("story").classList.remove("hidden");
  document.getElementById("story").scrollIntoView({ behavior: "smooth" });
}

// Cute notes for each photo (Mohit ki tareef 💖)
const notes = {
  1: "The way you smile can make any bad day feel lighter. Your smile is my favourite sight. 😊",
  2: "You have this calm in you that makes my heart slow down and feel safe. Being with you feels like peace. 🌙",
  3: "I love the way you are for me you are the most handsome person exist in this world. ✨",
  4: "Your presence makes everything feel easier. Even silence feels beautiful when I’m with you. 🤍",
  5: "You don’t even realise how effortlessly you make me feel special. With you, I feel chosen every single day. 💫",
  6: "The way you care, the way you listen — it makes me feel understood in ways I never felt before. 🌸",
  7: "You have this warmth in you that turns ordinary moments into memories I want to keep forever. 🔥",
  8: "When I’m with you, I don’t have to pretend. I can just be me — and that’s the best feeling in the world. 🫶",
  9: "You’re not just someone I love, you’re someone I feel safe with. My comfort place, my favourite person. ❤️"
};

// Photo click → rotate phone effect + note popup
function openNote(num) {
  const noteBox = document.getElementById("noteBox");
  const noteCard = document.getElementById("noteCard");
  const noteText = document.getElementById("noteText");

  noteText.innerText = notes[num] || "You are special to me in every way. ❤️";

  noteCard.classList.remove("rotate-phone");
  void noteCard.offsetWidth; // reset animation
  noteCard.classList.add("rotate-phone");

  noteBox.classList.remove("hidden");
}

// Close note popup
function closeNote() {
  document.getElementById("noteBox").classList.add("hidden");
}
