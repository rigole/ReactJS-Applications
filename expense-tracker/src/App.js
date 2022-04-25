import React from "react";
import './App.css';
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import {IncomeExpense} from "./components/IncomeExpense";
import {TransactionList} from "./components/TransactionList";
import {GlobalProvider} from "./context/GlobalSate";

function App() {
  return (
    <>
        <GlobalProvider>
            <Header/>
            <Balance/>
            <IncomeExpense/>
            <TransactionList/>
        </GlobalProvider>
    </>
  );
}

export default App;
