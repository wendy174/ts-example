interface StylesProps {
    styles: React.CSSProperties // type 
}

export const Styles = ({styles}: StylesProps) => { 
    return ( 
        <div style={styles}>
            Style Example
        </div>
    )
}