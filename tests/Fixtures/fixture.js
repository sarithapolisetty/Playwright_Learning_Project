//import {test as base} from 'playwright-bdd';
// import { LoginPage } from '../pages/loginPage';

// export const test = base.extend({
//     loginPage: async({page}, use) => {
//         await use(new LoginPage(page))
//     }
// })

//Dynamic Object loading | Dynamic import |Reduce code 
import {test as base} from 'playwright-bdd';
import * as Pages from './pages';

const { LoginPage } = Pages;

const createTestFunction = (PageClass) => async ({page}, use) => {
    await use(new PageClass(page))
}

export const test = base.extend ({
    loginPage: createTestFunction(LoginPage)
})
