import React from 'react';
import { render, fireEvent, within } from '@testing-library/react';
import GroupSelect from './GroupSelect';


const options = [
    {
        "title": "Test Element"
    },
    {
        "title": "Test Group Title",
        "groupId": "test-group"
    },
    {
        "title": "group option 1",
        "groupRef": "test-group"
    },
    {
        "title": "group option 2",
        "groupRef": "test-group"
    },
];

const autocompletePlaceholder = 'Select Options';

describe('GroupSelect Component', () => {

    test('should select a standard not grouped option', async () => {
        const onChangeMock = jest.fn();
        const [targetOption] = options;
        const { findByPlaceholderText } = render(<GroupSelect options={options} onChange={onChangeMock} placeholder={autocompletePlaceholder} />);
        const autocomplete = await findByPlaceholderText(autocompletePlaceholder);
        fireEvent.mouseDown(autocomplete);
        const { getByText: getByBodyText } = within(document.body);
        const option = getByBodyText(targetOption.title);

        expect(option).toBeInTheDocument();
        fireEvent.click(option);
        expect(onChangeMock).toHaveBeenCalledTimes(1);
        expect(onChangeMock).toHaveBeenCalledWith([targetOption]);
    });

    test('should select all group element when group heading option is selected', async () => {
        const onChangeMock = jest.fn();
        const [, groupHeadingOption, ...groupSubOptions] = options;
        const { findByPlaceholderText } = render(<GroupSelect options={options} onChange={onChangeMock} placeholder={autocompletePlaceholder} />);
        const autocomplete = await findByPlaceholderText(autocompletePlaceholder);
        fireEvent.mouseDown(autocomplete);
        const { getByText: getByBodyText } = within(document.body);
        const option = getByBodyText(groupHeadingOption.title);

        expect(option).toBeInTheDocument();
        fireEvent.click(option);
        expect(onChangeMock).toHaveBeenCalledTimes(1);
        expect(onChangeMock).toHaveBeenCalledWith([groupHeadingOption, ...groupSubOptions]);
    });

    test('should select only first nested option from a group', async () => {
        const onChangeMock = jest.fn();
        const [, , firstSubOption] = options;
        const { findByPlaceholderText } = render(<GroupSelect options={options} onChange={onChangeMock} placeholder={autocompletePlaceholder} />);
        const autocomplete = await findByPlaceholderText(autocompletePlaceholder);
        fireEvent.mouseDown(autocomplete);
        const { getByText: getByBodyText } = within(document.body);
        const option = getByBodyText(firstSubOption.title);

        expect(option).toBeInTheDocument();
        fireEvent.click(option);
        expect(onChangeMock).toHaveBeenCalledTimes(1);
        expect(onChangeMock).toHaveBeenCalledWith([firstSubOption]);
    });

    test('should select the entire group if all nested options were selected', async () => {
        const onChangeMock = jest.fn();
        const [, groupHeadingOption, ...groupSubOptions] = options;
        const { findByPlaceholderText } = render(<GroupSelect options={options} onChange={onChangeMock} placeholder={autocompletePlaceholder} />);
        const autocomplete = await findByPlaceholderText(autocompletePlaceholder);
        fireEvent.mouseDown(autocomplete);
        const { getByText: getByBodyText } = within(document.body);

        groupSubOptions.forEach(targetOption => {
            const option = getByBodyText(targetOption.title);
            expect(option).toBeInTheDocument();
            fireEvent.click(option);
        });
        expect(onChangeMock).toHaveBeenCalledTimes(2);
        expect(onChangeMock).toHaveBeenLastCalledWith([groupHeadingOption, ...groupSubOptions]);

    });

    test('should unselect the group heading option if all group was selected and one of sub elements was unselected', async () => {
        const onChangeMock = jest.fn();
        const [, groupHeadingOption, groupSubOptionOne, groupSubOptionTwo] = options;
        const { findByPlaceholderText } = render(<GroupSelect options={options} values={[groupHeadingOption, groupSubOptionOne, groupSubOptionTwo]} onChange={onChangeMock} placeholder={autocompletePlaceholder} />);
        const autocomplete = await findByPlaceholderText(autocompletePlaceholder);
        fireEvent.mouseDown(autocomplete);
        const { getByText: getByBodyText } = within(document.body);

        const option = getByBodyText(groupSubOptionOne.title);
        expect(option).toBeInTheDocument();
        fireEvent.click(option);

        expect(onChangeMock).toHaveBeenCalledTimes(1);
        expect(onChangeMock).toHaveBeenLastCalledWith([groupSubOptionTwo]);
    });

})

