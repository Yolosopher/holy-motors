import "./nav.style.scss";

const navItems = [
  {
    name: "projects",
    link: "#projects",
  },
  {
    name: "works",
    link: "#works",
  },
  {
    name: "clients",
    link: "#clients",
  },
  {
    name: "story",
    link: "#story",
  },
];

const Navigation = ({ swiperInstance }) => {
  return !swiperInstance ? null : (
    <nav>
      <ul>
        {navItems.map(({ link, name }, index) => (
          <li
            className="nav-li"
            key={index}
            onClick={() => {
              swiperInstance.slideTo(index + 1);
            }}
          >
            <span className="our">Our</span> <span>{name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
