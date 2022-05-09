class BookingsController < ApplicationController
    before_action :find_booking, only: %i[show]
    skip_before_action :authorize, only: %i[index]
    
    def index
        bookings = Booking.all
        render json: bookings
    end

    def show
        render json: @booking
    end

    private
    # goes under private
    #to be used with show, update and destroy
    def find_booking
     @booking = Booking.find(params[:id])
    end
end
