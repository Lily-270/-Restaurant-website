import { render, screen } from "@testing-library/react";
import Booking from './Booking';

test('Renders the Booking heading', () => {
    render(<Booking />);
    const headingElement = screen.getByRole('heading', { name: /Book Now!/i });
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent("Book Now!");
});



