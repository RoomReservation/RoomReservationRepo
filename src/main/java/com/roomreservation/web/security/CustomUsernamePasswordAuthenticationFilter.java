package com.roomreservation.web.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.roomreservation.web.dto.LoginDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class CustomUsernamePasswordAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private String jsonUsername;
    private String jsonPassword;

    @Override
    protected String obtainUsername(HttpServletRequest request) {
        return jsonUsername;
    }

    @Override
    protected String obtainPassword(HttpServletRequest request) {
        return jsonPassword;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) {
        try {
            String data = request.getReader().lines().reduce((accumulator, actual) -> accumulator + actual).orElse("");
            ObjectMapper mapper = new ObjectMapper();

            LoginDTO loginDTO = mapper.readValue(data, LoginDTO.class);
//            this.jsonUsername = "kuba";
            this.jsonUsername = loginDTO.getLogin();
//            this.jsonPassword = "krupski";
            this.jsonPassword = loginDTO.getPassword();

        } catch (IOException e) {
            e.printStackTrace();
        }
        return super.attemptAuthentication(request, response);
    }
}

