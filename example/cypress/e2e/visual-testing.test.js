describe('Visual Testing', () => {
  const SCREENS = [400, 768, 1280];

  it('Demo Page', () => {
    cy.visit('/');
    cy.get('footer').scrollIntoView({ duration: 500 });

    cy.wait(1000);

    cy.percySnapshot('Demo', {
      widths: SCREENS,
      minHeight: 2000, // Fix for percy because it's not taking the whole height ...
    });
  });

  it('Resume', () => {
    cy.visit('/resume.html');
    cy.scrollTo('bottom');

    cy.percySnapshot('Resume', {
      widths: SCREENS,
    });
  });

  it('Resume - Custom Theme', () => {
    cy.visit('/resume-custom-theme.html');
    cy.scrollTo('bottom');

    cy.percySnapshot('Resume - Custom Theme', {
      widths: SCREENS,
    });
  });
});
