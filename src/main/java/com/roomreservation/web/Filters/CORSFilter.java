package com.roomreservation.web.Filters;

import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

    public class CORSFilter extends OncePerRequestFilter {
//
//        @Override
//        protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
//            response.addHeader("Access-Control-Allow-Origin", "*");
//
//            if (request.getHeader("Access-Control-Request-Method") != null && "OPTIONS".equals(request.getMethod())) {
//                // CORS "pre-flight" request
//                response.addHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//    			response.addHeader("Access-Control-Allow-Headers", "Authorization");
//                response.addHeader("Access-Control-Allow-Headers", "Content-Type");
//                response.addHeader("Access-Control-Allow-Credentials", "true");
//                response.addHeader("Access-Control-Max-Age", "123");
//                response.setStatus(HttpServletResponse.SC_OK);
//            }
//
//            filterChain.doFilter(request, response);
//        }
//
//    }


        static final String ORIGIN = "Origin";

        @Override
        protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
                throws ServletException, IOException {
            System.out.println(request.getHeader(ORIGIN));
            System.out.println(request.getMethod());
            if (request.getHeader(ORIGIN) == null) {
                String origin = request.getHeader(ORIGIN);
                response.setHeader("Access-Control-Allow-Origin", "*");//* or origin as u prefer
                response.setHeader("Access-Control-Allow-Credentials", "true");
                response.setHeader("Access-Control-Allow-Headers",
                        request.getHeader("Access-Control-Request-Headers"));
            }
            if (request.getMethod().equals("OPTIONS")) {
                try {
                    response.getWriter().print("OK");
                    response.getWriter().flush();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }else{
                filterChain.doFilter(request, response);
            }
        }
    }