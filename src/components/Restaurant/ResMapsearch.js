    <div className="search-group ">
          <input
            type="text"
            id="address"
            placeholder="請輸入地址"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {/* 
          {/* <Link to="/resdetail/">
            <button id="submit">
              <BsCursor size="24px" />
            </button>
          </Link> */}

          <button id="submit" onClick={onSubmit}>
            <BsCursor size="24px" />
          </button>
        </div>