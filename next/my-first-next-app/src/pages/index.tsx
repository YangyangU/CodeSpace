import type { NextPage } from 'next';
import CatCard from '../components/cards/cat/CatCard';
const Home: NextPage = () => {
    return (
      <>
        <CatCard name={'Fluffy'} age={2} color={'white'}></CatCard>
      </>
    );
  };
  
  export default Home;

