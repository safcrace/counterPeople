<?php 
namespace flatbox\Http\Controllers; 
use Illuminate\Http\Request; 
use Carbon\Carbon; use flatbox\Device; 

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        /*$date = new Carbon();
        $dateOne = $date->subWeek();
        $date = $date->toDateString();
        $dateOne = $dateOne->toDateString();
        //$data = \DB::select("select date_format(added_on, '%Y-%c-%d') 
as fecha, count(*) as cantidad from devices where added_on between 
'2016-12-01' and '2016-12-05' and	action = 'out' group by 
fecha;");
        //$data = Device::whereBetween('added_on', ['2016-12-01', 
'2016-12-05'])->get();
        //exit(var_dump($data));*/
        $data = [65, 15, 80, 81, 56, 55, 70];
        //exit(var_dump($data));
        return view('home', compact('data'));
    }
}
