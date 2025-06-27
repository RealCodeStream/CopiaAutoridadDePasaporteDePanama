import Img from '../../public/assets/footer.png'

const Footer = ({
    imageUrl = Img,
    // imageUrl2 = Img2,
    height = "h-94",
}) => {
    return(
        <footer className={`${height} w-full`}>
            <div 
        className={` w-full h-full bg-cover bg-no-repeat`}
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      > 
      </div>
     
      
        </footer>
    );
}

export default Footer;