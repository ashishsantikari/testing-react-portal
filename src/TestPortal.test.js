import React from 'react';
import { render } from '@testing-library/react';
import TestPortal from "./TestPortal";
import userEvent from "@testing-library/user-event";

describe('TestPortal', () => {
    describe('in container', () => {
        it('renders content', () => {
            const { getByTestId } = render(<TestPortal renderInPortal={false} />);
            expect(getByTestId('container')).toBeTruthy();
        });
        it('shows content on clicking click here', () => {
            const screen = render(<TestPortal renderInPortal={false} />);
            expect(screen.queryByText('hello world')).not.toBeTruthy();
            userEvent.click(screen.getByText(/click here/i));
            expect(screen.queryByText('hello world')).toBeTruthy();
        });
    });

    describe('in portal', () => {
        it('renders content', () => {
            const { getByTestId } = render(<TestPortal renderInPortal />);
            expect(getByTestId('container')).toBeTruthy();
        });
        it('shows content on clicking click here', () => {
            const { queryByText, getByText } = render(<TestPortal renderInPortal />);
            expect(queryByText('hello world')).not.toBeTruthy();
            userEvent.click(getByText(/click here/i));
            expect(queryByText('hello world')).toBeTruthy();
        });
    });
});
