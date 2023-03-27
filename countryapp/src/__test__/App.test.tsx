import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import App from "../App";
import * as api from "../Components/api";

const fetchmock = jest.mock("../Components/api");
describe("Test the data is Fetching or not", () => {
    beforeEach(() => jest.clearAllMocks());
    it("Data is coming Properly", async () => {
        const e = ""
        api.getcountry(e).then((res) => {
            { ok: true }
        })
        render(<App />)
        const inputtext = screen.getByPlaceholderText("enter the country")
        const newValue = 'new value';
        fireEvent.change(inputtext, { target: { value: newValue } });

        const buttonsearch = screen.getByRole("button")
        // expect(api.getcountry).toHaveBeenCalledTimes(0)
        fireEvent.click(buttonsearch)
         expect(api.getcountry).toHaveBeenCalled()
       await waitFor(()=>null)
    })
})