export const Menu = (props) => {
    const { onSectionChange, menuOpened, setMenuOpened } = props;
  
    return (
      <>
        <button
          onClick={() => setMenuOpened(!menuOpened)}
          className="z-20 fixed top-4 right-4  md:top-12 md:right-12 p-3 bg-[#915EFF] w-14 h-14 rounded-md"
        >
          <div
            className={`bg-white h-0.5 rounded-md w-full transition-all ${
              menuOpened ? "rotate-45  translate-y-0.5" : ""
            }`}
          />
          <div
            className={`bg-white h-0.5 rounded-md w-full my-1 ${
              menuOpened ? "hidden" : ""
            }`}
          />
          <div
            className={`bg-white h-0.5 rounded-md w-full transition-all ${
              menuOpened ? "-rotate-45" : ""
            }`}
          />
        </button>
        <div
          className={`z-10 fixed top-0 right-0 bottom-0 bg-white transition-all overflow-hidden flex flex-col
        ${menuOpened ? "w-full md:w-80" : "w-0"}`}
        >
          <div className="flex-1 flex items-start justify-center flex-col gap-6 p-8">
            <LinkButton label="about" setMenuOpened = {setMenuOpened} onClick={() => onSectionChange(0)} />
            <LinkButton label="work" setMenuOpened = {setMenuOpened} onClick={() => onSectionChange(1)} />
            <LinkButton label="projects" setMenuOpened = {setMenuOpened} onClick={() => onSectionChange(3.4)}/>
            <LinkButton label="contact" setMenuOpened = {setMenuOpened} onClick={() => onSectionChange(4.7)}/>
          </div>
        </div>
      </>
    );
  };
  
  const MenuButton = (props) => {
    const { label, setMenuOpened, onClick } = props;
    console.log(setMenuOpened);
    function handleClick() {
      onClick();
  
      // Close menu if on mobile
      if(window.innerWidth < 768) {
        console.log("Closing menu");
        setMenuOpened(false);
      }
    }
    return (
      <button
        onClick={handleClick}
        className="text-2xl text-[#434343] font-bold cursor-pointer hover:text-[#915EFF] transition-colors"
      >
        {label}
      </button>
    );
  };

  const LinkButton = (props) => {
    const {label, onClick} = props;
    return (
      <a href = {`#${label}`} onClick={onClick}
        className="text-2xl text-[#434343] font-bold cursor-pointer hover:text-[#915EFF] transition-colors"
      >
        {label.charAt(0).toUpperCase()
  + label.slice(1)}
        </a>
    );
  }