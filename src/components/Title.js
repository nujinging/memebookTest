import '../scss/components/layerHeader.scss'

export default function Title(props) {
  const goBack = () => {
    // 브라우저 뒤로가기 실행
    window.history.back();
  };
  return (
    <div className="layer_header">
      {
        props.title && (
          <h1 className="tit">
            {props.title}
          </h1>
        )
      }

    </div>
  )
}