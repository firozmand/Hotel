module.exports = {
  content: ["./index.html","./Facilities.html","./Rooms.html","./Contact-us.html"],
  theme: {
    extend: {
      backgroundImage: {
        'footer': "url('/src/footer.png')",
      }
    },
  },
  plugins: [require("daisyui")],
}
