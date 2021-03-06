describe("Home Page", () => {
    beforeEach(() => { // runs before each test in the block
      cy.visit("http://localhost:3000");
    });
  
    it("has an h1 in nav bar containing Isla Vista Housing Search", () => {
      cy.get("h1").should('have.text', ' Isla Vista Housing Search ');
    });

    it("has links in nav bar under titles Listings and Map", () => {
        cy.get("a").its(0).should('have.text', 'Listings');
        cy.get("a").its(1).should('have.text', 'Map');
    });

    it("has h2s containing Filter Listings and Sort Listings, 6 selects, 2 labels and a paragraph in left side form", () => {
        cy.get("h2").its(0).should('have.text', 'Filter Listings');
        cy.get("h2").its(1).should('have.text', 'Sort Listings');
        cy.get('select').should('have.length', 7);
        cy.get('label').its(0).should('have.text', 'Total Price');
        cy.get('label').its(1).should('have.text', ' Price Per Person');
        cy.get("p").its(0).should('have.text', 'Not finding the right place? Narrow down the filters to show preffered listings at the top!');
    });

    it("has a view that switches between a table and cards", () => {
        cy.get("button").should('have.text', 'Table ViewCard View');

        cy.get('button').its(1).click({force: true});
        cy.get('table').should('not.visible');
        cy.get('button').its(0).click({force: true});
        cy.get('table').should('visible');

        cy.get("thead>tr>th").its(0).should('have.text', 'Address');
        cy.get("thead>tr>th").its(1).should('have.text', 'Housing Company');
        cy.get("thead>tr>th").its(2).should('have.text', 'Size');
        cy.get("thead>tr>th").its(3).should('have.text', 'Total Price');
        cy.get("thead>tr>th").its(4).should('have.text', 'Price Per Person*');
    });

    it("has a link under the title Developers and paragraphs in the side disclaimer", () => {
        cy.get("a").its(3).should('have.text', 'Developers');
        cy.get("p").should('have.text', 'Not finding the right place? Narrow down the filters to show preffered listings at the top!*Price per person is calculated using total price and housing size so may vary depending on room arrangements');
    });
  });

  describe("Map Page", () => {
    beforeEach(() => { // runs before each test in the block
      cy.visit("http://localhost:3000/map");
    });
  
    it("has an h1 in nav bar containing Isla Vista Housing Search", () => {
      cy.get("h1").its(0).should('have.text', ' Isla Vista Housing Search ');
    });
      
    it("has links in nav bar under titles Listings and Map", () => {
        cy.get("a").its(0).should('have.text', 'Listings');
        cy.get("a").its(1).should('have.text', 'Map');
    });


    it("has h2s containing Filter Listings and Sort Listings, 4 selects, and 2 labels in left side form", () => {
        cy.get("h2").its(0).should('have.text', 'Filter Results');
        cy.get('select').should('have.length', 5);
        cy.get('label').its(0).should('have.text', 'Total Price');
        cy.get('label').its(1).should('have.text', ' Price Per Person');
    });    

    it("has the same paragraphs in the rightside comparisons views", () => {
        cy.get("p").its(2).should('have.text', ' No house is selected yet. Select a house marker from the map and use the buttons add it to a comparison box.');
        cy.get("p").its(3).should('have.text', ' No house is selected yet. Select a house marker from the map and use the buttons add it to a comparison box.');
    }); 

    it("has a link under the title Developers and paragraphs in the side disclaimer", () => {
        cy.get("a").its(3).should('have.text', 'Developers');
        cy.get("p").its(0).should('have.text', 'Scroll to zoom in on the map and make clusters of houses more visible.');
        cy.get("p").its(1).should('have.text', '*Price per person is calculated using total price and housing size so may vary depending on room arrangements');
    });
  });
