import Container from 'react-bootstrap/Container';
import { Tstl } from '../Constants';

const Testimonial = () => {
  return (
    <div>
      <Container>
        <div className="row g-4">
          {Tstl.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-6">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '15px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '10px',
                  }}
                >
                  <img
                    style={{
                      width: '70px',
                      height: '70px',
                      borderRadius: '50%',
                      marginRight: '10px',
                      marginBottom: '70px',
                    }}
                    src={item.src}
                    alt={item.name}
                  />
                  <img
                    style={{
                      width: '5%',
                      height: 'auto',
                      marginBottom: '110px',
                      marginRight: '10px',
                    }}
                    src="Quote.svg"
                    alt="Quote"
                  />
                  <div
                    style={{
                      textAlign: 'left',
                      width: '370px',
                    }}
                  >
                    <p style={{ fontSize: '14px', marginBottom: '10px' }}>
                      {item.desc}
                    </p>
                    <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                      {item.name}
                    </p>
                    <p style={{ fontSize: '12px' }}>{item.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
