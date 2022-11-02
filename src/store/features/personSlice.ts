import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Person {
  id: number;
  name: string;
}

interface PersonState {
  persons: Person[];
}

const initialState: PersonState = {
  persons: [],
};

export const fetchPerson = createAsyncThunk(
  "person/fetch",
  async (thunkAPI) => {
    const response = await fetch("http://localhost:8000/person", {
      method: "GET",
    });
    const data = response.json();
    return data;
  },
);

export const savePerson = createAsyncThunk(
  "person/save",
  async (name: string, thunkAPI) => {
    const response = await fetch("http://localhost:8000/person", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
      }),
    });
    const data = await response.json();
    return data;
  },
);

export const PersonSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    addPerson: (state, action: PayloadAction<{ name: string }>) => {
      state.persons.push({
        id: state.persons.length,
        name: action.payload.name,
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPerson.fulfilled, (state, action) => {
      state.persons = action.payload;
    });

    builder.addCase(savePerson.fulfilled, (state, action) => {
      state.persons.push(action.payload);
    });
  },
});

export default PersonSlice.reducer;
export const { addPerson } = PersonSlice.actions;
