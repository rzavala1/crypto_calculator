import ImageLogo from '../../assets/images/logoCrypto.png';

function Header() {

    return (
      <header className='p-[35px] bg-secondary'>
        <div>
          <img src={ImageLogo} className="w-[200px]"/>
        </div>
      </header>
    );
  }
  
  export default Header;
  