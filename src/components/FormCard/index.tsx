import axios, { AxiosRequestConfig } from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Beer } from '../../types/beer';
import { BASE_URL } from '../../utils/requests';
import { validateName } from '../../utils/validate';
import './styles.css';

type Props = {
    beerId: string;
}

function FormCard({ beerId }: Props) {
    const navigate = useNavigate();

    const [beer, setBeer] = useState<Beer>();

    useEffect(() => {
        axios.get(`${BASE_URL}/beer/${beerId}`)
            .then(response => {
                setBeer(response.data)
            });
    }, [beerId]);


const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = (event.target as any).name.value;

    if (!validateName(name)) {
        return;
    }

    const config: AxiosRequestConfig = {
        baseURL: BASE_URL,
        method: 'PUT',
        url: '/item',
    }

    axios(config).then(response => {
        navigate("/");
    });
 }


    return (
        <div className="beer-form-container">
            <img className="beer-card-image" src={beer?.image} alt={beer?.title} />
            <div className="beer-card-bottom-container">
                <h3>{beer?.title}</h3>
                <form className="beer-form" onSubmit={handleSubmit}>
                    <div className="form-group beer-form-group">
                        <label htmlFor="name">Nome do combo</label>
                        <input type="email" className="form-control" id="name" />
                    </div>
                    <div className="form-group beer-form-group">
                        <select className="form-control" id="item">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                    <div className="beer-form-btn-container">
                        <button type="submit" className="btn btn-primary beer-btn">Salvar</button>
                    </div>
                </form>
                <Link to="/">
                    <button className="btn btn-primary beer-btn mt-3">Cancelar</button>
                </Link>
            </div>
        </div>
    );
}

export default FormCard;