import React from "react";
import HorizontalTimeline from "react-horizontal-timeline";

const EXAMPLE = [
    {
        data: "2012-08-07",
        statusB: "Bacharel em Sistemas de Informação pela Anhanguera Educacional",
    },
    {
        data: "2013-07-03",
        statusB: "Publicação Revista da Universidade Vale do Rio Verde - Development of a Help Desk System for the University Vale do Rio Verde",
    },
    {
        data: "2014-10-05",
        statusB: "Publicação Healthcare Technology Letters - Non-invasive method to analyse the risk of developing diabetic foot",
    },
    {
        data: "2014-07-02",
        statusB: "Mestrado em Engenharia de Sistemas e Automação pela Universidade Federal de Lavras",
    },
    {
        data: "2017-07-02",
        statusB: "Publicação Ipea - Inovação aberta no setor público",
    },
    {
        data: "2017-12-02",
        statusB: "Certificado ITIL® - Foundation Certificate in IT Service Management",
    },
    {
        data: "2018-12-02",
        statusB: "Certificado Scrum - Scrum Fundamentals Certified",
    },
    {
        data: "2019-01-02",
        statusB: "Projeto DreamLife - Projeto de uma página de viagens, cadastros de hotéis, cidades. Crud completo em C#, Angular e Posgres.",
    },
    {
        data: "2020-01-02",
        statusB: "Projeto Minas Bike - Desenvolvimento de um projeto de controle de estoque e cadastro de cliente.",
    }
];

export default class Timeline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curIdx: 0,
            prevIdx: -1
        };
    }

    render() {
        const { curIdx } = this.state;
        const curStatus = EXAMPLE[curIdx].statusB;

        return (
            <div>
                <div
                    style={{
                        width: "60%",
                        height: "100px",
                        margin: "0 auto",
                        marginTop: "20px",
                        fontSize: "15px",
                        color: "beige"
                    }}
                >
                    <HorizontalTimeline
                        styles={{
                            background: "#f8f8f8",
                            foreground: "#1A79AD",
                            outline: "#dfdfdf",
                        }}
                        index={this.state.curIdx}
                        indexClick={index => {
                            this.setState({ curIdx: index });
                        }}
                        values={EXAMPLE.map(x => x.data)}
                    />
                </div>
                <div className="boxText">
                    <p>{curStatus}</p>
                </div>
            </div>
        );
    }
}
