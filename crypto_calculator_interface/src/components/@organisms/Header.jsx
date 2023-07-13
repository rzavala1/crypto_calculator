import ImageLogo from '../../assets/images/logoCrypto.png';

function Header() {

    return (
      <header className='p-[35px] z-10'>
        <div>
          <img src={ImageLogo} className="w-[200px]" alt=""/>
        </div>
      </header>
    );
  }
  
  export default Header;
  