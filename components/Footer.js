const Footer = (props) => {
  return (
    <>
      <footer className="absolute bottom-0 w-full	flex justify-between bg-green-500 py-4 items-center">
        <p href="career" className="px-3 m-1 font-semibold	text-gray-800">
          {props.count} Locations World Wide
        </p>
      </footer>
    </>
  );
}

export default Footer;
