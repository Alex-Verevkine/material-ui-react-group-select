# Group Select

Built on top of the [`material-ui react 5` Autocomplete](https://mui.com/api/autocomplete/) Component.

### Capabilities:

- Ability to select a single option from a select.
- Ability to select `n` options from grouped options.
- Ability to select an entire group of options, by selecting the group heading option.
- Ability to unselect an entire group of options by unselecting the group heading option.
- Auto-selection of a heading option when a user selects all the sub-options from the group.
- Auto unselecting of a heading option when a user unselects one of the sub options.
- Ability to search for specific options.

### Install

Install using `npm i -S @alex-v/material-ui-react-group-select`

### Usage

In a React app, use the Button or Badge components:  
`import GroupSelect from '@alex-v/material-ui-react-group-select'`

### GroupSelect props

| Name        | Description                                                                                                                                                                         |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| values      | List of selected options                                                                                                                                                            |
| options     | possible options array of `objects` that can contain </br> `title:string`, </br> `groupId:string` - a unique group identifier, </br> `groupRef:string` - a reference to a `groupId` |
| label       | Autocomplete label                                                                                                                                                                  |
| placeholder | Autocomplete placeholder                                                                                                                                                            |
| onChange    | Callback fired when the value changes.                                                                                                                                              |
