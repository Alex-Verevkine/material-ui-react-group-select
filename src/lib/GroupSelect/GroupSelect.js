import React, { useState, useEffect, useRef } from "react";
import { flatten, noop } from "lodash";
import PropTypes from "prop-types";
import {
    Checkbox,
    TextField,
    Autocomplete,
    Typography,
    Grid,
    Chip
} from "@mui/material";
import {
    CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon,
    CheckBox as CheckBoxIcon
} from "@mui/icons-material";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const GroupSelect = ({
    options = [],
    values = [],
    onChange = noop,
    label = '',
    placeholder = '',
    ...restProps
}) => {
    const notInitialRender = useRef(false);
    const [selectedValues, setSelectedValues] = useState(values);
    const [groupedOptions, setGroupedOptions] = useState({});
    const [groups, setGroups] = useState({});

    useEffect(() => {
        setGroupedOptions(
            options
                .filter(({ groupRef }) => groupRef)
                .reduce(
                    (acc, option) => ({
                        ...acc,
                        [option.groupRef]: acc[option.groupRef]?.length
                            ? [...acc[option.groupRef], option]
                            : [option]
                    }),
                    {}
                )
        );
        setGroups(
            options
                .filter(({ groupId }) => groupId)
                .reduce((acc, group) => ({ ...acc, [group.groupId]: group }), {})
        );
    }, options);

    useEffect(() => {
        if (notInitialRender.current) {
            onChange(selectedValues);
        } else {
            notInitialRender.current = true;
        }
    }, [selectedValues.length]);

    const handleValuesChange = (selectedValues = [], reason, details) => {
        const updatedValues = selectedValues.filter(
            ({ groupId, groupRef }) => !groupId && !groupRef
        );
        const selectedGroups = selectedValues
            .filter(({ groupId }) => groupId)
            .reduce((acc, group) => ({ ...acc, [group.groupId]: group }), {});

        const groupedSelectedSubElements = selectedValues
            .filter(({ groupRef }) => groupRef)
            .reduce(
                (acc, option) => ({
                    ...acc,
                    [option.groupRef]: acc[option.groupRef]?.length
                        ? [...acc[option.groupRef], option]
                        : [option]
                }),
                {}
            );
        switch (reason) {
            case "selectOption":
                if ("groupId" in details.option) {
                    const {
                        option: { groupId }
                    } = details;
                    groupedSelectedSubElements[groupId] = groupedOptions[groupId];
                } else if (
                    "groupRef" in details.option &&
                    groupedSelectedSubElements[details.option.groupRef].length ===
                    groupedOptions[details.option.groupRef].length
                ) {
                    const {
                        option: { groupRef }
                    } = details;
                    selectedGroups[groupRef] = groups[groupRef];
                }
                updatedValues.push(
                    ...Object.values(selectedGroups),
                    ...flatten(Object.values(groupedSelectedSubElements))
                );
                setSelectedValues(updatedValues);
                break;
            case "removeOption":
                if ("groupId" in details.option) {
                    const {
                        option: { groupId }
                    } = details;
                    delete groupedSelectedSubElements[groupId];
                } else if (
                    "groupRef" in details.option &&
                    details.option.groupRef in selectedGroups
                ) {
                    const {
                        option: { groupRef }
                    } = details;
                    delete selectedGroups[groupRef];
                }
                updatedValues.push(
                    ...Object.values(selectedGroups),
                    ...flatten(Object.values(groupedSelectedSubElements))
                );
                setSelectedValues(updatedValues);
                break;
            default:
                setSelectedValues(selectedValues);
                break;
        }
    };

    return (
        <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={options}
            disableCloseOnSelect
            value={selectedValues}
            onChange={(event, newValue, reason, details) => {
                handleValuesChange(newValue, reason, details);
            }}
            getOptionLabel={(option) =>
                option.groupId ? `All (${option.title})` : option.title
            }
            renderTags={(renderValues, getTagProps) => {
                const selectedGroups = new Set(
                    renderValues
                        .filter(({ groupId }) => groupId)
                        .map(({ groupId }) => groupId)
                );

                return renderValues
                    .filter((option) => !selectedGroups.has(option.groupRef))
                    .map((option, index) => (
                        <Chip
                            variant="outlined"
                            key={option}
                            label={option.groupId ? `${option.title} (All)` : option.title}
                            {...getTagProps({ index })}
                        />
                    ));
            }}
            renderOption={(props, option, { selected }) => {
                return (
                    <li {...props}>
                        <Grid
                            container
                            alignItems="center"
                            style={{ ...(option.groupRef ? { paddingLeft: "24px" } : {}) }}
                        >
                            <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{ marginRight: 8 }}
                                checked={selected}
                            />
                            <Typography noWrap>{option.title}</Typography>
                        </Grid>
                    </li>
                );
            }}
            style={{ width: 500 }}
            renderInput={(params) => (
                <TextField {...params} variant="outlined" label={label} placeholder={placeholder} />
            )}
            {...restProps}
        />
    );
}

GroupSelect.propType = {
    options: PropTypes.array,
    onChange: PropTypes.func,
    selectedValues: PropTypes.array,
    label: PropTypes.string,
    placeholder: PropTypes.string
};

export default GroupSelect;
