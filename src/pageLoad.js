import createHomePage from './home';
import createTabs from './tabs';
import createProductsPage from './products';
function initialLoad() {
    createTabs();
    createHomePage();
}

export default initialLoad;