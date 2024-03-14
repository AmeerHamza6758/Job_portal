import './App.css';
import HiringCompanies from './userComponents/companies/HiringCompanies';
import JobSearch from './userComponents/findjobSection/JobSearch';
import Footer from './userComponents/footer/Footer';
import HowWork from './userComponents/howItWork/HowWork';
import NavCenter from './userComponents/navbar/NavCenter';
import Navbar from './userComponents/navbar/Navbar';
import NewsArticle from './userComponents/newsArticles/NewsArticle';
import ClientReview from './userComponents/swiper/ClientReview';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <NavCenter/>
      <JobSearch/>
      <HiringCompanies/>
      <ClientReview/>
      <HowWork/>
      <NewsArticle/>
      <Footer/>
    </div>
  );
}

export default App;
