import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {toggleDegrees } from './actions/environmentActions';
import AppRoutes from './routes';
import {ThemeProvider} from 'styled-components'
import {AppContainer, BtnWrapper, ChangeModeBtn} from "./Style/style";

const theme = {
    primaryBlue: "#1c254b",
    bgTransparentColor: "linear-gradient(90deg, rgba(179,206,226,0.9279061966583508) 11%, rgba(172,189,243,1) 36%, rgba(136,159,227,0.9447129193474265) 67%, rgba(126,151,225,1) 95%)",
    mainBorderColor: "rgba(41, 41, 41, 0.25)"
}

const App = () => {
    const dispatch = useDispatch();
    const { isCelsius} = useSelector((state) => state.environment);
    const onClickDegreeBtn = () => {
        dispatch(toggleDegrees());
    };

   return (
       <AppContainer >
           <ThemeProvider theme={theme}>
                <BtnWrapper >
                    <ChangeModeBtn  onClick={onClickDegreeBtn}>
                        {isCelsius ? `F` : `C`}{'\u00B0'}
                    </ChangeModeBtn>
                </BtnWrapper>
                <AppRoutes />
           </ThemeProvider>
       </AppContainer>
    );
};
export default App;
