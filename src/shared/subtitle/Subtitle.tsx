interface IProps {
    subtitle: string;
}

const Subtitle: React.FC<IProps> = ({ subtitle }) => {
    return <h3 className="section__subtitle">{subtitle}</h3>;
};

export default Subtitle;
