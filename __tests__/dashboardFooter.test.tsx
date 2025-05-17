import DashboardFooter from "@/pages/components/DashboardFooter";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";


describe("Home page footer", () => {
    it("has the correct class for the footer section", () => {
      render(<DashboardFooter />);
  
      const footer = screen.getByTestId("footing");
  
      expect(footer).toHaveClass("govuk-footer");
    });

    it("credits the UKHSA Dashboard", () => {
        render(<DashboardFooter />);
    
        const credit = screen.getByTestId("credit");
    
        expect(credit).toBeInTheDocument()
        expect(credit).toHaveTextContent("Inspired by the UKHSA Dashboard.")

        const UKHSAlink = screen.getByTestId("UKHSAlink")
        expect(UKHSAlink).toBeInTheDocument() 
        expect(UKHSAlink).toHaveClass("govuk-footer__link")
        //TODO: Make a more interesting test where the user clicks on the link and checks that we don't get a 404
      });
});