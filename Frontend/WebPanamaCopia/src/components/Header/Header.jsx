import Img from '../../assets/image.png'

const Header = ({ 
  imageUrl = Img,
  height = "h-65",
  imagePosition = "bg-bottom"
}) => {
  return (
    <header className={`${height} w-full`}>
      <div 
        className={` w-full h-full bg-cover bg-no-repeat ${imagePosition}`}
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      > 
      </div>
    </header>
  );
};

export default Header;