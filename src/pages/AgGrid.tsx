import { AgGridReact } from 'ag-grid-react';
import React, { useState, Component, MouseEvent, ChangeEvent, useRef, useEffect} from "react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import PaginationStatusBar from './PaginationStatusBar';
import { SortChangedEvent } from 'ag-grid-community';
import { AgGridData } from './AgGridData';

interface IrowData {
    brndNo : string;
    btn : any;
    brand: string;
    name: string;
    price: number;
    useYn: string;
    displayNo: number;
}

const GridTest = () => {

    const [selectedRows, setSelectedRows] = useState<any>([]);
    const [rowData, setRowData] = React.useState<IrowData[]>(AgGridData)

    // 셀렉트 박스 컴포넌트 용 가라데이터
    const options = ['사용', '미사용'];

    const [columnDefs] = React.useState([
        {headerName:'일련번호', field: 'brndNo', headerCheckboxSelection: true ,checkboxSelection: true, sortable: true},
        {headerName:'브랜드', field: 'brand', sortable: true ,resizable: true,cellRenderer:"linkRenderer"},
        {headerName:'링크 복사', field: 'btn', cellRenderer:"btnCellRenderer"},
        {headerName:'이름', field: 'name', sortable: true,resizable: true  },
        {headerName:'가격', field: 'price', sortable: true ,resizable: true , cellRenderer:"currencyRenderer"},
        {headerName:'사용여부', field: 'useYn', sortable: true, resizable: true, cellRenderer:"selectRenderer"
        ,cellRendererParams: {
            options: options,
        },},
        {headerName:'전시순서', field: 'displayNo', sortable:true, resizable:true, cellRenderer:"inputRenderer"}
    ])

    // headerName <- 테이블 헤더에 보여줄 내용
    // filed <- rowData 정보
    // headerCheckboxSelection <- 생성일시 헤더에 체크박스 생성
    // checkboxSelection <- rowData부분에도 체크박스 생성
    // pinned <- pinned: 'left'로 작성하면 좌측으로
    // width <- width값 조정

    // 체크박스 선택 시 이벤트
    const onSelectionChanged = (event:any) => {
        console.log(event.api.getSelectedRows());
    }

    // 로우 선택 시 이벤트
    const onCellClicked = (event:any) => {
        console.log(event.data);
    }

    // 솔팅 시 이벤트
    const onSortChanged = (event:SortChangedEvent) => {
        const sortModel = event.api.getModel()
        console.log("Sorted Columns:", sortModel);
    };

    return (
        <div className="ag-theme-alpine" style={{height: "500px", width: '100%'}}>
            <AgGridReact
                rowData={rowData} // 테이블 데이터
                columnDefs={columnDefs} // 헤더 데이터
                animateRows={true} // 행 애니메이션
                suppressRowClickSelection={true} // true -> 클릭 시 행이 선택안됌
                rowSelection="single" // 여러 행 선택
                enableCellTextSelection={true} // 그리드가 일반 테이블인 것처럼 드래그시 일반 텍스트 선택
                onSelectionChanged={onSelectionChanged} // 선택한 체크박스 정보 가져오기
                onCellClicked={onCellClicked}
                suppressPaginationPanel={true}
                frameworkComponents={{
                    linkRenderer : LinkRenderer,
                    btnCellRenderer : BtnCellRenderer,
                    selectRenderer : SelectRenderer,
                    inputRenderer : InputRenderer,
                    currencyRenderer : CurrencyRenderer,
                }}
                onSortChanged={onSortChanged}

                

            >
            </AgGridReact>
            <PaginationStatusBar/>
        </div>
    );
}

// 링크를 포함하는 셀 렌더러 컴포넌트
const LinkRenderer: React.FC<any> = ({ value }) => {
    const link = <a href={value} target="_blank" rel="noopener noreferrer">{value}</a>;
    return <div>{link}</div>;
};

// 버튼 셀 렌더러 컴포넌트
interface BtnCellRendererProps {
    value: any;
    clicked: (value: any) => void;
}
  

class BtnCellRenderer extends Component<BtnCellRendererProps> {
    
    btnClickedHandler(event: MouseEvent<HTMLButtonElement>) {
        alert("버튼입니다 ㅎ")
    }
  
    render() {
      return (
        <button onClick={this.btnClickedHandler}>복사</button>
      );
    }
}

// 셀렉트 박스 셀 렌더러 컴포넌트
interface SelectRendererProps {
    value: string;
    options: string[];
    setValue: (value: string) => void;
}

const SelectRenderer: React.FC<SelectRendererProps> = (props) => {
    const [selectedValue, setSelectedValue] = useState<string>(props.value);
  
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
      const newValue: string = event.target.value;
      setSelectedValue(newValue);
      props.setValue(newValue); // ag-Grid에 선택한 값을 전달
    };
  
    const options = props.options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ));
  
    return (
      <select value={selectedValue} onChange={handleChange}>
        {options}
      </select>
    );
};

// 인풋박스 셀 렌더러 컴포넌트
interface InputRendererProps {
    value: string;
    setValue: (value: string) => void;
}

// 인풋박스 사이즈 관련 임시 함수
const inputStyle = {
    width: '50px', // 원하는 너비로 조정
};

const InputRenderer: React.FC<InputRendererProps> = (props) => {
    const [inputValue, setInputValue] = useState<string>(props.value);
  
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const newValue: string = event.target.value;
      setInputValue(newValue);
      props.setValue(newValue); // ag-Grid에 입력한 값을 전달
    };
  
    return (
      <input type="text" value={inputValue} onChange={handleChange} style={inputStyle}/>
    );
};

// 금액 포메터 셀 렌더러 컴포넌트
interface CurrencyRendererProps {
    value: number;
  }
  
const CurrencyRenderer: React.FC<CurrencyRendererProps> = (props) => {
    const formattedValue = new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(props.value);
  
    return (
      <span>{formattedValue}</span>
    );
};

// 헤더 컴포넌트
interface CustomHeaderProps {
    totalCount: number;
}

const CustomHeader: React.FC<CustomHeaderProps> = (props) => {
    const { totalCount } = props;
    const headerRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      // 컴포넌트가 마운트된 후에 호출되는 부분
      // 필요에 따라 추가적인 초기화 작업을 수행할 수 있습니다.
    }, []);
  
    useEffect(() => {
      // totalCount 값이 변경되었을 때 호출되는 부분
      // totalCount 값을 헤더에 반영하고 싶다면 이곳에 로직을 작성합니다.
    }, [totalCount]);
  
    useEffect(() => {
      if (headerRef.current) {
        // headerRef.current를 사용하여 헤더의 DOM 요소에 접근할 수 있습니다.
        // 필요에 따라 DOM 조작을 수행할 수 있습니다.
      }
    }, []);
  
    return (
      <div ref={headerRef}>
        Total Count: {totalCount}
      </div>
    );
  };



export default GridTest;