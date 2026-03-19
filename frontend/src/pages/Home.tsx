import { Link } from 'react-router-dom';

// Importing your images
import discProfile from '../assets/images/DISC-profiel.png';
import discGuide from '../assets/images/DISC-profiel-guide.png';
import personalityTest from '../assets/images/persoonlijkheidtest.png';
import enneagram from '../assets/images/enneagram.png';
import resume from '../assets/images/CV-okt-2024.png';

const Home = () => {
    return (
        <div className="pb-5">
            {/* Hero Section */}
            <header className="container-fluid p-5 text-white bg-dark display-5 d-flex flex-column justify-content-center align-items-center hero-header">
                <h1 className="display-5 fw-bold">Christian Gawriyah</h1>
                <p>Software Developer</p>
                <Link to="/contact" className="btn btn-outline-light">Contact me!</Link>
            </header>

            <div className="container-fluid">
                {/* About Me Section */}
                <section id="about-me">
                    <h2 className="d-flex justify-content-center py-4 fw-bold mt-5 h1">About me</h2>
                    <div className="row pb-5">
                        <div className="col-12 col-lg-6 text-center border pb-5">
                            <h3>Who I am</h3>
                            <p className="h5 mt-3">I am Christian, I am 18 years old, and I am studying Software Development. I am taking this course at the MBO ROC van Twente. Currently, I am in my second year, completing level 4.</p>
                        </div>

                        <div className="col-12 col-lg-6 text-center border">
                            <h3>My Skills</h3>
                            <p className="h5 mt-3">In these short 18 months, I have built up experience with many languages. I now have experience with HTML, CSS, PHP, JavaScript, SQL, and a little bit of C#. I am also working with Bootstrap now, and this portfolio is built using Bootstrap.</p>
                        </div>
                    </div>
                </section>

                {/* Competencies Section */}
                <section id="competencies">
                    <h2 className="d-flex justify-content-center py-4 fw-bold h1">Strengths, Weaknesses & Competencies</h2>
                    <div className="row pb-5">
                        <div className="col-12 col-lg-6 text-center border">
                            <h3>Strengths and Weaknesses</h3>

                            <div className="row"><h5 className="p-2">HTML</h5></div>
                            <div className="progress mb-3">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style={{ width: '85%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>

                            <div className="row"><h5 className="p-2">CSS</h5></div>
                            <div className="progress mb-3">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" role="progressbar" style={{ width: '85%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>

                            <div className="row"><h5 className="p-2">Bootstrap</h5></div>
                            <div className="progress mb-3">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>

                            <div className="row"><h5 className="p-2">Javascript</h5></div>
                            <div className="progress mb-3">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" style={{ width: '70%' }} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 border">
                            <h3 className="text-center">Competencies</h3>
                            <div className="row">
                                <ul className="list-unstyled ms-5 mt-4">
                                    <li className="h4 mb-3">Perseverance</li>
                                    <li className="h4 mb-3">Eager to learn</li>
                                    <li className="h4 mb-3">Teamwork</li>
                                    <li className="h4 mb-3">Clean code</li>
                                    <li className="h4 mb-3">Communication</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Personality Section */}
                <section id="personality">
                    <h2 className="d-flex justify-content-center py-4 fw-bold h1">Personality</h2>
                    <div className="row pb-5">
                        <div className="col-12 col-lg-6 border text-center">
                            <h3>DISC Profile</h3>
                            <img src={discProfile} alt="My DISC profile chart" className="img-fluid" />
                            <img src={discGuide} alt="DISC profile guide" className="img-fluid w-100 max-width-730" />
                        </div>

                        <div className="col-12 col-lg-6 border text-center">
                            <h3>Personality Test</h3>
                            <img src={personalityTest} alt="My Personality test results" className="img-fluid w-100 max-width-730" />
                        </div>
                    </div>
                </section>

                {/* Profile Section */}
                <section id="profile">
                    <h2 className="d-flex justify-content-center py-4 fw-bold h1">Profile</h2>
                    <div className="row pb-5">
                        <div className="col-12 col-lg-6 border text-center">
                            <h3>Enneagram</h3>
                            <img src={enneagram} alt="Enneagram Chart" className="img-fluid" />

                            <table className="table table-bordered mt-3">
                                <thead>
                                    <tr>
                                        <th>Type</th>
                                        <th>Name</th>
                                        <th>Traits</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="type-1"><td>1</td><td>The Reformer</td><td>Principled, perfectionist, disciplined</td></tr>
                                    <tr className="type-2"><td>2</td><td>The Helper</td><td>Caring, generous, people-pleasing</td></tr>
                                    <tr className="type-3"><td>3</td><td>The Achiever</td><td>Ambitious, image-conscious, goal-oriented</td></tr>
                                    <tr className="type-4"><td>4</td><td>The Individualist</td><td>Creative, introspective, emotionally deep</td></tr>
                                    <tr className="type-5"><td>5</td><td>The Investigator</td><td>Analytical, independent, reserved</td></tr>
                                    <tr className="type-6"><td>6</td><td>The Loyalist</td><td>Loyal, responsible, anxiety-prone</td></tr>
                                    <tr className="type-7"><td>7</td><td>The Enthusiast</td><td>Optimistic, spontaneous, adventurous</td></tr>
                                    <tr className="type-8"><td>8</td><td>The Challenger</td><td>Assertive, strong-willed, confrontational</td></tr>
                                    <tr className="type-9"><td>9</td><td>The Peacemaker</td><td>Easygoing, accommodating, agreeable</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="col-12 col-lg-6 text-center border">
                            <h3>Resume</h3>
                            <img src={resume} alt="Christian Gawriyah Resume" className="img-fluid mt-5 w-100 max-width-730" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;