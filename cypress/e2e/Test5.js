/// <reference types= "cypress" />

describe('this is the second assirtion', () => {
    it('click on date after today', () => {

        const currentDate = new Date();
        // ---------------------------------------------------------------------------
        const nextday = new Date(currentDate);
        nextday.setDate(currentDate.getDate() + 1);

        const nextDay = nextday.getDate().toString();

        // -----------------------------------------------------------------------------------

        const next2day = new Date(currentDate);
        next2day.setDate(currentDate.getDate() + 2);

        const after2day = next2day.getDate().toString();


        cy.visit("https://www.almosafer.com/en?ncr=1")

        cy.get('[data-testid="FlightSearchBox__FromDateButton"] > .sc-eSePXt').should('contain', nextDay);
        cy.get('[data-testid="FlightSearchBox__ToDateButton"]').click()
        cy.get('[data-testid="FlightSearchCalendar__2023-09-15"]').click()
        cy.get('[data-testid="FlightSearchBox__ToDateButton"] > .sc-eSePXt').should('contain', after2day);


        // ------------------------------------------------------------------------------------

        cy.get('.sc-imDfJI').should("contain.text", "Economy")
    });
});