import { Ng4ShopingCartAppPage } from './app.po';

describe('ng4-shoping-cart-app App', () => {
  let page: Ng4ShopingCartAppPage;

  beforeEach(() => {
    page = new Ng4ShopingCartAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
