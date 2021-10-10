import React from "react";
import renderer from 'react-test-renderer'
import {Create} from "../Components/create.jsx";
import Adapter from 'enzyme-adapter-react-16';
import * as reactRedux from 'react-redux'
import {funcPost} from '../store/actions/actions.jsx'
import { shallow,configure } from "enzyme";
configure({adapter:new Adapter()})

describe("<Create />",()=>{
    describe("Estructura",()=>{
        const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
        const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')
        let wrapper;
        beforeEach(()=>{
            useSelectorMock.mockClear()
            useDispatchMock.mockClear()
            wrapper=shallow(<Create/>);
        });
        it("Renderiza un <form>",()=>{
            expect(wrapper.find("form")).toHaveLength(1);
        });
        it("Renderiza un span con el texto igual a 'Crear Actividad'",()=>{
            expect(wrapper.find("span").at(0).text()).toEqual("Crear Actividad");
        });
        it("Renderiza un input con el nombre igual a 'name' ",()=>{
            expect(wrapper.find('input[name="name"]')).toHaveLength(1)
        });
    });
    describe('Inputs y select del Form de la Actividad',()=>{
        let wrapper,useState,useStateSpy;
        beforeEach(()=>{
            useState=jest.fn();
            useStateSpy=jest.spyOn(React,"useState");
            useStateSpy.mockImplementation((init)=>[init,useState])
            wrapper=shallow(<Create/>)
        })
        describe("nameA Input",()=>{
            it("Debe de cambiar el estado de inputs cuando se cambien el valor del input name",()=>{
                wrapper
                .find('input[name="name"]')
                .simulate("change",{
                    target:{name:"name",value:"Valor de Prueba"},
                });
                expect(useState).toHaveBeenCalledWith({
                    name:"Valor de Prueba",
                    duracion: "",
                    dificultad: "",
                    temporada: "",
                    pais: [],
                });
            });
        })
        describe("Select Dificultad",()=>{
            it("Debe cambiar el estado de inputs cuando cambie el valor de select 'dificultad'",()=>{
                wrapper
                .find('select[name="dificultad"]')
                .simulate("change",{
                    target:{name:"dificultad",value:"3"},
                });
                expect(useState).toHaveBeenCalledWith({
                    name:"",
                    duracion: "",
                    dificultad: "3",
                    temporada: "",
                    pais: [],
                });
            });
        })  
    });

})