// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';

export default function Playground() {
    const defaultProps = {
        options: filterShini,
        getOptionLabel: (option) => option.title,
    };

    return (
        <Stack spacing={1} className='autoCompleteContent'>
            <Autocomplete
                {...defaultProps}
                id="disable-clearable1"
                disableClearable
                renderInput={(params) => (
                    <TextField {...params} label="Производители" variant="standard" />
                )}
            />
            <Autocomplete
                {...defaultProps}
                id="disable-clearable2"
                disableClearable
                renderInput={(params) => (
                    <TextField {...params} label="Модель шины" variant="standard" />
                )}
            />
            <Autocomplete
                {...defaultProps}
                id="disable-clearable3"
                disableClearable
                renderInput={(params) => (
                    <TextField {...params} label="Ширина шины" variant="standard" />
                )}
            />
            <Autocomplete
                {...defaultProps}
                id="disable-clearable4"
                disableClearable
                renderInput={(params) => (
                    <TextField {...params} label="Высота" variant="standard" />
                )}
            />
            <Autocomplete
                {...defaultProps}
                id="disable-clearable5"
                disableClearable
                renderInput={(params) => (
                    <TextField {...params} label="Диаметр шины" variant="standard" />
                )}
            />
            <Autocomplete
                {...defaultProps}
                id="disable-clearable6"
                disableClearable
                renderInput={(params) => (
                    <TextField {...params} label="Сезонность" variant="standard" />
                )}
            />
            <Autocomplete
                {...defaultProps}
                id="disable-clearable7"
                disableClearable
                renderInput={(params) => (
                    <TextField {...params} label="Шипы" variant="standard" />
                )}
            />
            <Autocomplete
                {...defaultProps}
                id="disable-clearable8"
                disableClearable
                renderInput={(params) => (
                    <TextField {...params} label="Индекс нагрузки" variant="standard" />
                )}
            />
            <Autocomplete
                {...defaultProps}
                id="disable-clearable9"
                disableClearable
                renderInput={(params) => (
                    <TextField {...params} label="Индекс скорости" variant="standard" />
                )}
            />
            <Autocomplete
                {...defaultProps}
                id="disable-clearable10"
                disableClearable
                renderInput={(params) => (
                    <TextField {...params} label="RunFlat" variant="standard" />
                )}
            />
            <Autocomplete
                {...defaultProps}
                id="disable-clearable11"
                disableClearable
                renderInput={(params) => (
                    <TextField {...params} label="Производители" variant="standard" />
                )}
            />
        </Stack>
    );
}

const filterShini = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
];