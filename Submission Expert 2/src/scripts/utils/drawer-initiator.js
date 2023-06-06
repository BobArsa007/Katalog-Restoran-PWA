const DrawerInitiator = {
  init({ button, drawer, content }) {
    const toggleDrawer = (event) => {
      event.stopPropagation();
      drawer.classList.toggle('open');
    };

    const closeDrawer = (event) => {
      event.stopPropagation();
      drawer.classList.remove('open');
    };

    button.addEventListener('click', toggleDrawer);
    content.addEventListener('click', closeDrawer);
  },
};

export default DrawerInitiator;
