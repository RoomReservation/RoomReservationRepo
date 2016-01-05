package com.roomreservation.web.security;


        import org.springframework.security.authentication.DisabledException;
        import org.springframework.security.core.AuthenticationException;
        import org.springframework.security.web.authentication.AuthenticationFailureHandler;

        import javax.servlet.ServletException;
        import javax.servlet.http.HttpServletRequest;
        import javax.servlet.http.HttpServletResponse;
        import java.io.IOException;

public class AuthFailureHandler implements AuthenticationFailureHandler {

    @Override
    public void onAuthenticationFailure(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, AuthenticationException e) throws IOException, ServletException {
        if (e instanceof DisabledException) {
            httpServletResponse.sendError(456, "Access Denied for inactive Customer, Please activate your account");
        } else {
            httpServletResponse.sendError(HttpServletResponse.SC_UNAUTHORIZED);
        }
    }
}
