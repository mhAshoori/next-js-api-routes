function HomePage() {
  return (
    <div>
      <h1>The Home Page</h1>
      <form>
        <div>
          <label htmlFor="email">Your Email</label>
          <br />
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="message">Your Feedback</label>
          <br />
          <textarea name="feedback" id="feedback" cols="30" rows="10"></textarea>
        </div>
      </form>
    </div>
  );
}

export default HomePage;
