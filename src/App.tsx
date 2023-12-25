
import { WishlistProvider } from './hooks/useWishlist';
import HomePage from './components/HomePage';


const App = () => {
  return (
    <WishlistProvider>
      <HomePage />
    </WishlistProvider>
  );
};

export default App;
